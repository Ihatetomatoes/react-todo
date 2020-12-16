import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  let props;
  beforeEach(() => {
    props = {};
  });

  const createComponent = () => render(<App {...props} />);

  it("should render without crashing", () => {
    expect(createComponent).not.toThrowError();
  });

  it("should render empty app", () => {
    const { getByTestId } = createComponent();
    const title = getByTestId("mainTitle");
    expect(title).toHaveTextContent("Todo List (0 tasks)");
  });

  it("should render empty app message", () => {
    const { getByTestId } = createComponent();
    const emptyMessage = getByTestId("emptyAppMessage");
    expect(emptyMessage).toBeInTheDocument();
  });
});
