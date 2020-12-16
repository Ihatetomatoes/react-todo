import { render } from "@testing-library/react";
import Pill from "./Pill";

describe("Pill", () => {
  let props;
  beforeEach(() => {
    props = {};
  });

  const createComponent = () => render(<Pill {...props} />);

  it("should render without crashing", () => {
    expect(createComponent).not.toThrowError();
  });

  it("should render medium as a default value", () => {
    const { getByTestId } = createComponent();
    const pill = getByTestId("pill");
    expect(pill).toHaveTextContent("medium");
  });

  it("should render high priority", () => {
    props.priority = "high";
    const { getByTestId } = createComponent();
    const pill = getByTestId("pill");
    expect(pill).toHaveTextContent("high");
  });

  it("should render low priority", () => {
    props.priority = "low";
    const { getByTestId } = createComponent();
    const pill = getByTestId("pill");
    expect(pill).toHaveTextContent("low");
  });
});
