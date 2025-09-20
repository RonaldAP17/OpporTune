import { HexagonBackground } from "./components/animate-ui/components/backgrounds/hexagon";
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars";
import { RippleButton } from "./components/animate-ui/components/buttons/ripple";
import { RippleButtonRipples } from "./components/animate-ui/components/buttons/ripple";

function JobListItem(props) {
  let stateStyle = " ";

  if (props.state === "Interview") {
    stateStyle =
      "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800";
  } else if (props.state === "Applied") {
    stateStyle =
      "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800";
  } else if (props.state === "Closed") {
    stateStyle =
      "inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800";
  }

  return (
    <div className="job-cards-container space-y-4 m-auto">
      <HexagonBackground className="p-6 w-100 rounded-xl shadow-md hover:shadow-lg flex flex-row items-center">
        <div className="relative">
          <div className="shrink-0">
            <img
              className="h-12 w-12"
              src="https://via.placeholder.com/150"
              alt="Logo"
            />
          </div>
          <div className="space-y-2">
            <p className="text-gray-900">
              <span className="font-bold">Company: </span>
              {props.company}
            </p>
            <p className="text-gray-900">
              <span className="font-bold">Position: </span>
              {props.position}
            </p>
            <p className="text-gray-900">
              <span className="font-bold">Date: </span>
              {props.date}
            </p>
            <p className="text-gray-900">
              <span className={stateStyle}>{props.state}</span>
            </p>
            <div className="space-x-4">
              <RippleButton className="bg-gray-200 hover:bg-gray-400">
                Edit
                <RippleButtonRipples color="#444444ff"/>
              </RippleButton>
              <RippleButton className="bg-red-200 hover:bg-red-400">
                Delete
                <RippleButtonRipples color="#cc0404ff" />
              </RippleButton>
            </div>
          </div>
        </div>
      </HexagonBackground>
    </div>
  );
}

export default JobListItem;
