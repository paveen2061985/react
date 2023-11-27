import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
        <img className="logo" src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0" alt="logo"/>
);


const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const restaurentList = [
    {
        "info": {
          "id": "56096",
          "name": "Mehfil",
          "cloudinaryImageId": "wfaytngr2fhmdyngai1g",
          "locality": "Kukatpally",
          "areaName": "Kukatpally",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Tandoor",
            "Chinese",
            "Kebabs"
          ],
          "avgRating": 3.8,
          "feeDetails": {
            "restaurantId": "56096",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3300
          },
          "parentId": "637",
          "avgRatingString": "3.8",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 3.9,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "3.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-27 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mehfil-kukatpally-hyderabad-56096",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "58774",
          "name": "Almond House",
          "cloudinaryImageId": "qoycmlg27eisr9z3ncxu",
          "locality": "JNTU - Hitech City Road",
          "areaName": "Kukatpally",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Sweets",
            "Desserts",
            "Snacks",
            "Beverages"
          ],
          "avgRating": 4.6,
          "veg": true,
          "feeDetails": {
            "restaurantId": "58774",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4600
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4600
          },
          "parentId": "40",
          "avgRatingString": "4.6",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-27 21:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/almond-house-jntu-hitech-city-road-kukatpally-hyderabad-58774",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "208050",
          "name": "G Pulla Reddy Sweets",
          "cloudinaryImageId": "ebf6ddb2bb68d50ed5af67f5a133a21d",
          "locality": "Miyapur",
          "areaName": "Miyapur",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Sweets",
            "Desserts",
            "Snacks"
          ],
          "avgRating": 4.4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "208050",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4600
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4600
          },
          "parentId": "3767",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-27 21:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/g-pulla-reddy-sweets-miyapur-hyderabad-208050",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "419508",
          "name": "Udipi's Upahar",
          "cloudinaryImageId": "f717d33a827f36c0521a58feacbcdcaa",
          "locality": "Miyapur",
          "areaName": "miyapur",
          "costForTwo": "₹130 for two",
          "cuisines": [
            "South Indian",
            "North Indian",
            "Chinese",
            "Beverages"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
            "restaurantId": "419508",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2700
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2700
          },
          "parentId": "1061",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 2.9,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "2.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-27 22:30:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/udipis-upahar-miyapur-hyderabad-419508",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "623059",
          "name": "Varalakshmi Tiffins",
          "cloudinaryImageId": "8523266de1213e8ea57e5df4eedf747e",
          "locality": "Aditya Nagar",
          "areaName": "Nizampet & Pragathi Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "South Indian"
          ],
          "avgRating": 4.3,
          "veg": true,
          "feeDetails": {
            "restaurantId": "623059",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3300
          },
          "parentId": "6482",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-27 12:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/varalakshmi-tiffins-aditya-nagar-nizampet-and-pragathi-nagar-hyderabad-623059",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "124164",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
          "locality": "Forum Mall",
          "areaName": "Kukatpally",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "124164",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3900
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3900
          },
          "parentId": "195515",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 4.4,
            "serviceability": "SERVICEABLE",
            "slaString": "28 mins",
            "lastMileTravelString": "4.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-27 23:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/starbucks-coffee-forum-mall-kukatpally-hyderabad-124164",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "410951",
          "name": "EatFit",
          "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
          "locality": "Circle No.14",
          "areaName": "Kukatpally",
          "costForTwo": "₹270 for two",
          "cuisines": [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "410951",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3300
          },
          "parentId": "76139",
          "avgRatingString": "4.0",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "3.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-27 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/eatfit-circle-no-14-kukatpally-hyderabad-410951",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "577939",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "Chandanagar Circle No 21",
          "areaName": "Miyapur",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "577939",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3300
          },
          "parentId": "166",
          "avgRatingString": "4.0",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-28 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "FREE ITEM"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-chandanagar-circle-no-21-miyapur-hyderabad-577939",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      },
      {
        "info": {
          "id": "11176",
          "name": "Chutneys",
          "cloudinaryImageId": "mbltlbs2qyacur6yothk",
          "locality": "Kukatpally",
          "areaName": "Kukatpally",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "South Indian"
          ],
          "avgRating": 4.1,
          "veg": true,
          "feeDetails": {
            "restaurantId": "11176",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3300
          },
          "parentId": "272",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 3.7,
            "serviceability": "SERVICEABLE",
            "slaString": "26 mins",
            "lastMileTravelString": "3.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-27 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "text": "BENEFITS",
              "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-572000da-8202-46b8-bf34-d2ee38ec2c88"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/chutneys-kukatpally-hyderabad-11176",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
      }
];
const RestaurentCard = ({cloudinaryImageId, name, cuisines, avgRatingString, sla }) => {
    return (
        <div className="card">
            <img src= { 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200/' + cloudinaryImageId } alt="recipie pic"/>
            <h2>{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h6>{avgRatingString} stars</h6>
            <h6>{sla.lastMileTravelString}</h6>
        </div>
    )
}

 // no key < index key < unique key
const Body = () => {
    return (<div className="restaurent-list">
    {
        restaurentList.map((restaurent) => {
            return <RestaurentCard {...restaurent.info} key={restaurent.info.id}/>
        }) 
    }
    </div>)
    /* return (
        <div className="restaurent-list">
            <RestaurentCard {...restaurentList[0].info} />
            <RestaurentCard {...restaurentList[1].info} />
            <RestaurentCard {...restaurentList[2].info} />
            <RestaurentCard {...restaurentList[3].info} />
            <RestaurentCard {...restaurentList[4].info} />
            <RestaurentCard {...restaurentList[5].info} />
            <RestaurentCard {...restaurentList[6].info} />
            <RestaurentCard {...restaurentList[7].info} />
            <RestaurentCard {...restaurentList[8].info} />
        </div>
    ); */
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    );
}

// React.Fragment - It is compoenent, which exported by React library
// JSX has only one parent.
const AppLayoutComponent = () => {
    return (
        // <React.Fragment>
        /* <div style={{color: 'red'}}>
            <Header />
            <Body />
            <Footer />
        </div> */
        <>
            <Header />
            <Body />
            <Footer />
        </>
        //<React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayoutComponent />);