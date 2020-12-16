import { render } from "@testing-library/react";
import TasksList from "./TasksList";

describe("TasksList", () => {
  let props;
  beforeEach(() => {
    props = {};
  });

  const createComponent = () => render(<TasksList {...props} />);

  it("should render without crashing", () => {
    expect(createComponent).not.toThrowError();
  });

  it("should render tasks list title", () => {
    props.title = "My Todo List";
    const { getByTestId } = createComponent();
    const listTitle = getByTestId("listTitle");
    expect(listTitle).toHaveTextContent("My Todo List");
  });
});
