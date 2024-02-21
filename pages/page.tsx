import PostTitle from "../components/post-title";
import Header from "../components/header";

const Page = ({ post }) => {
    return <div><Header /><div className="w-screen h-screen flex justify-center items-center"><h1 className="text-3xl">This is the page</h1></div></div>;
}

export default Page;