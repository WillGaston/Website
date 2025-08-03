import ReviewContent from "./ReviewContent";
import ReviewDetails from "./ReviewDetails";
//import ReviewHero from "./ReviewHero";
// import ReviewTLDR from "./ReviewTLDR";

export default function ReviewsPage() {
    
    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <div className=" flex flex-col items-center w-screen">
            </div>
            <div className="flex flex-row w-screen">
                <div className="flex w-1/5 px-4 py-8 items-center justify-center"><ReviewDetails /></div>
                <div className="flex w-4/5 px-4 py-8"><ReviewContent /></div>
            </div>
        </div>
    );
}