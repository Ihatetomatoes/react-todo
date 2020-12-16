import { fireEvent, render } from "@testing-library/react";
import Task from "./Task";

describe("Task", () => {
  let props;
  beforeEach(() => {
    props = {};
  });

  const createComponent = () => render(<Task {...props} />);

  it("should render without crashing", () => {
    expect(createComponent).not.toThrowError();
  });

  it("should render task", () => {
    props.task = { name: "First task", priority: "1", completed: false };
    const { getByTestId } = createComponent();
    const checkbox = getByTestId("completedCheckbox");
    expect(checkbox).not.toBeChecked();
  });

  it("should render completed task", () => {
    props.task = { name: "First task", priority: "1", completed: true };
    const { getByTestId } = createComponent();
    const checkbox = getByTestId("completedCheckbox");
    expect(checkbox).toBeChecked();
  });

  it("should render task name", () => {
    props.task = { name: "First task", priority: "1", completed: true };
    const { getByTestId } = createComponent();
    const taskName = getByTestId("taskName");
    expect(taskName).toHaveTextContent("First task");
  });

  it("should render edit button by default", () => {
    props.task = { name: "First task", priority: "1", completed: true };
    const { getByTestId } = createComponent();
    const editButton = getByTestId("selectTaskBtn");
    expect(editButton).toBeInTheDocument();
  });

  it("should render cancel button if the task is selected", () => {
    props.task = { name: "First task", priority: "1", completed: true };
    props.isSelected = true;
    const { getByTestId } = createComponent();
    const cancelButton = getByTestId("cancelEditBtn");
    expect(cancelButton).toBeInTheDocument();
  });

  it("should fire handleCompletion event", () => {
    props.task = {
      id: 123,
      name: "First task",
      priority: "1",
      completed: false,
    };
    props.handleCompletion = jest.fn();
    const { getByTestId } = createComponent();
    const checkbox = getByTestId("completedCheckbox");
    fireEvent.click(checkbox);
    expect(props.handleCompletion).toBeCalledWith(123);
  });

  it("should fire handleSelect event", () => {
    props.task = {
      id: 123,
      name: "First task",
      priority: "1",
      completed: false,
    };
    props.handleSelect = jest.fn();
    const { getByTestId } = createComponent();
    const selectButton = getByTestId("selectTaskBtn");
    fireEvent.click(selectButton);
    expect(props.handleSelect).toBeCalledWith({
      id: 123,
      name: "First task",
      priority: "1",
      completed: false,
    });
  });

  it("should fire delete event", () => {
    props.task = {
      id: 123,
      name: "First task",
      priority: "1",
      completed: false,
    };
    props.handleDelete = jest.fn();
    const { getByTestId } = createComponent();
    const deleteBtn = getByTestId("deleteBtn");
    fireEvent.click(deleteBtn);
    expect(props.handleDelete).toBeCalledWith(123);
  });

  it("should fire cancel event", () => {
    props.task = {
      id: 123,
      name: "First task",
      priority: "1",
      completed: true,
    };
    props.isSelected = true;
    props.cancelEdit = jest.fn();
    const { getByTestId } = createComponent();
    const cancelEditBtn = getByTestId("cancelEditBtn");
    fireEvent.click(cancelEditBtn);
    expect(props.cancelEdit).toBeCalled();
  });
});
