import React from "react";

function SideComponent() {
    return (
        <div className="md:flex items-center justify-start mt-10 md:mt-44 text-white">
        <div className="md:text-lg md:ml-32 w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-2xl md:text-3xl tracking-wide w-full font-semibold mb-2">
            YOUR BUSINESS IDEA, OUR TECHNOLOGICAL EXPERTISE
          </h3>
          <div className="tracking-wide text-xl md:text-2xl font-medium">
            We are a full-scale{" "}
            <span className="text-yellow-600 tracking-wider">custom product development</span>
          </div>
          <div className="tracking-wide text-xl md:text-2xl mb-6 md:mb-10 font-normal">
            company driven by a goal-oriented spirit
          </div>
          <h3 className="text-2xl md:text-3xl">Estimated Project</h3>
        </div>
      </div>
    );
}

export default SideComponent;
