import { render, screen } from "@testing-library/react";
import { RestaurantCard, withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  // Wrap the RestaurantCard with the HOC
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  render(<PromotedRestaurantCard resData={MOCK_DATA} />);

  // Check for promoted label
  const label = screen.getByText("Promoted");
  expect(label).toBeInTheDocument();

  // Check for restaurant name
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
