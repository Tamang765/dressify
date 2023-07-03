import { BsPersonCircle } from "react-icons/bs";
import { GrDirections } from "react-icons/gr";
import { MdPayment } from "react-icons/md";

const CheckoutData = [
    {
        id: "1",
        icon: <BsPersonCircle />,
        heading: "CONTACT INFO ",
        name: "Suraj Thapaliya 9867123841"
    }
    , {
        id: "2",
        icon: <GrDirections />,
        heading: "SHIPPING ADDRESS",
        address: "Bafal ,ktm, Nepal "
    },
    {
        id: "3",
        icon: <MdPayment />,
        heading: "PAYMENT METHOD",
        payment:"Google / Apple wallet xxx-xxx-xx12"
    }
]
export default CheckoutData;