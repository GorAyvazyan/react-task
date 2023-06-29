import React from "react";
import { ReactComponent as ChartIcon } from "assets/images/chart.svg";
import { ReactComponent as UsersIcon } from "assets/images/users.svg";
import { ReactComponent as RestaurantIcon } from "assets/images/restaurant.svg";
import { ReactComponent as LearnIcon } from "assets/images/learn.svg";
import { ReactComponent as ShopIcon } from "assets/images/shop.svg";
import { ReactComponent as CuisineIcon } from "assets/images/cuisine.svg";
import { ReactComponent as DishIcon } from "assets/images/dish.svg";
import { Link } from "react-router-dom";

const Items = [
  {
    label: "Homepage",
    key: "homepage",
    icon: <ChartIcon />
  },
  {
    label: "Users",
    key: "users",
    icon: (
      <Link to="/users">
        <UsersIcon />
      </Link>
    )
  },
  {
    label: "Premium users",
    key: "premiumUsers",
    icon: <UsersIcon />
  },
  {
    label: "Restaurants",
    key: "restaurants",
    icon: <RestaurantIcon />
  },
  {
    label: "Learn",
    key: "learn",
    icon: <LearnIcon />,
    children: [
      {
        label: "Quick start",
        key: "quickStart"
      },
      {
        label: "Recipes",
        key: "recipes"
      },
      {
        label: "Books",
        key: "books"
      },
      {
        label: "Movies",
        key: "movies"
      },
      {
        label: "Dietician",
        key: "Dietician"
      }
    ]
  },
  {
    label: "Shop",
    key: "shop",
    icon: <ShopIcon />
  },
  {
    label: "Cuisine",
    key: "cuisine",
    icon: <CuisineIcon />
  },
  {
    label: "Post",
    key: "post",
    icon: <DishIcon />
  }
];

export default Items;
