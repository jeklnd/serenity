import { MdPlumbing } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";
import { MdKitchen } from "react-icons/md";
import { MdYard } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdBed } from "react-icons/md";
import { MdBathroom } from "react-icons/md";
import { MdStairs } from "react-icons/md";

export const rooms = [
    {
        room: "Bedroom",
        image: "https://picsum.photos/200",
        text: "Bring serenity to the most peaceful room of the home with our full range of bedroom services including flooring, closet door repair/replacement, install ceiling fans, plus more.",
        image: "/assets/services/bedroom.jpeg",
        icon: <MdBed />,
    },
    {
        room: "Bathroom",
        image: "https://picsum.photos/200",
        text: "Ready to replace the vanity? Retile the floor? Install a new toilet? The Island Handyman has you covered.",
        image: "/assets/services/bathroom.jpeg",
        icon: <MdBathroom />,
    },
    {
        room: "Kitchen",
        image: "https://picsum.photos/200",
        text: "The kitchen is the heart of the home. Make sure yours brings you and your guests peace of mind. The Island Handyman can help with faucet replacement, dishwasher and microwave installation, plus more.",
        image: "/assets/services/kitchen.webp",
        icon: <MdKitchen />,
    },
    // {
    //     room: "Basement",
    //     image: "https://picsum.photos/200",
    //     text: "Bring tranquility to your home from the bottom up. Serenity Home Repair's basement services cover it all.",
    //     image: basement,
    //     icon: <MdStairs />,
    // },
];

export const services = [
    {
        image: "https://picsum.photos/200",
        name: "Home Repair and Maintenance",
        listItems: [
            "General repairs",
            "Door repair and replacement",
            "Molding repair and replacement",
            "Fence repair and replacement",
            "Fixture replacement",
            "Light fixture replacement",
            "Fan replacement",
            "Carpentry",
            "Flooring repair and replacement",
            "Drywall repair",
            "Painting",
            "Furniture assembly and repair",
        ],
        icon: <MdHome />,
    },
    {
        image: "https://picsum.photos/200",
        name: "Plumbing",
        listItems: [
            "Repair and replacement of faucets, sinks, and toilets",
            "Shower and tub repair and replacement",
            "Pipe repair and replacement",
            "Water heater repair and replacement",
            "Drain cleaning",
            "Water pressure issues",
        ],
        icon: <MdPlumbing />,
    },
    {
        image: "https://picsum.photos/200",
        name: "Electrical",
        listItems: [
            "Outlet and switch replacement",
            "Wiring repair and replacement",
            "Circuit breaker replacement",
            "Lighting installation and repair",
        ],
        icon: <MdElectricalServices />,
    },
    {
        image: "https://picsum.photos/200",
        name: "Bathroom and Kitchen Remodeling",
        listItems: [
            "Vanity and sink installation and replacement",
            "Bathtub and shower installation and replacement",
            "Fixture installation and replacement",
            "Backsplash installation",
            "Cabinet repair and replacement",
            "Countertop repair and replacement",
            "Flooring installation and replacement",
        ],
        icon: <MdKitchen />,
    },
    {
        image: "https://picsum.photos/200",
        name: "Exterior Home Repair and Maintenance",
        listItems: [
            "Deck repair and staining",
            "Gutter cleaning and repair",
            "Fence repair and replacement",
            "Siding repair and replacement",
            "Pressure washing",
            "Solar-powered exterior lighting installation",
        ],
        icon: <MdYard />,
    },
];
