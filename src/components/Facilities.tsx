import Image from "next/image";

const Facility = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-full px-4 md:px-9 lg:px-20 mx-auto">
        <h1 className="bold-44 text-center">Facilities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-24">
          {/* Facility 1 */}
          <div className="text-center bg-[#F4EFE2] px-6 py-16 w-full shadow-xl rounded-lg">
            <Image
              src="/001-area-graph.png" // Replace with the path to your image
              alt="Facility 1"
              width={80}
              height={80}
              layout="intrinsic" // Preserve the original aspect ratio
              className="mx-auto mb-7"
            />
            <h6 className="h6 mb-2">Top Areas</h6>
          </div>

          {/* Facility 2 */}
          <div className="text-center bg-[#F4EFE2] px-6 py-16 w-full shadow-xl rounded-lg ">
            <Image
              src="/002-special-tag.png" // Replace with the path to your image
              alt="Facility 2"
              width={100}
              height={100}
              className="mx-auto mb-7"
            />
            <h6 className="h6 mb-2">Offers</h6>
          </div>

          {/* Facility 3 */}
          <div className="text-center bg-[#F4EFE2] px-6 py-16 w-full shadow-xl rounded-lg">
            <Image
              src="/004-selling.png" // Replace with the path to your image
              alt="Facility 3"
              width={80}
              height={80}
              className="mx-auto mb-7"
            />
            <h6 className="h6 mb-2">Sell Info</h6>
          </div>

          {/* Facility 4 */}
          <div className="text-center bg-[#F4EFE2] px-6 py-16 w-full shadow-xl rounded-lg">
            <Image
              src="/003-for-rent.png" // Replace with the path to your image
              alt="Facility 4"
              width={80}
              height={80}
              className="mx-auto mb-7"
            />
            <h6 className="h6  mb-2">Rent Info</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
