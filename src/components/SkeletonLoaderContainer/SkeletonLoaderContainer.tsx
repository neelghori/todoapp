import SkeletonLoader from "../UI/SkeletonLoader";

const SkeletonLoaderContainer = () => {
  return (
    <div className="top-28 absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28 z-10">
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  );
};

export default SkeletonLoaderContainer;
