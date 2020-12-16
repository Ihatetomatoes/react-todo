import { fireEvent, render } from "@testing-library/react";
import AddTask from "./AddTask";

describe("AddTask", () => {
  let props;
  beforeEach(() => {
    props = {};
  });

  const createComponent = () => render(<AddTask {...props} />);

  it("should render without crashing", () => {
    expect(createComponent).not.toThrowError();
  });

  it("should render add submit button", () => {
    props.selectedTask = null;
    const { getByTestId } = createComponent();
    const submitBtn = getByTestId("submitBtn");
    expect(submitBtn).toHaveTextContent("Add");
  });

  it("should render update button if task is selected", () => {
    props.selectedTask = {
      id: 123,
      name: "First task",
      priority: "1",
      completed: true,
    };
    const { getByTestId } = createComponent();
    const submitBtn = getByTestId("submitBtn");
    expect(submitBtn).toHaveTextContent("Update");
  });

  it("should fire submit event", () => {
    props.selectedTask = {
      id: 123,
      name: "First task",
      priority: "1",
      completed: true,
    };
    props.handleSubmit = jest.fn();
    const { getByTestId } = createComponent();
    const submitBtn = getByTestId("submitBtn");
    fireEvent.click(submitBtn);
    expect(props.handleSubmit).toHaveBeenCalledWith({
      id: 123,
      name: "First task",
      priority: "1",
      completed: true,
    });
  });
});
