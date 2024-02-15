import PostTitle from "../components/post-title";

const Page = ({ post }) => {
    console.log("PAGE POST: ", post);
    return <div className="w-screen h-screen flex justify-center items-center"><h1 className="text-3xl">This is the page: </h1></div>;
}

export default Page;