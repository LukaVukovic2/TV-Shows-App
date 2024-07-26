import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "../Picker";

export const PickerIcon = () => {
  const { selectedShows, totalSteps } = useContext(PickerContext);

  if(selectedShows.length == 0) {
    return null;
  }

  return (
    <AvatarGroup size='md' max={totalSteps}>
      {
        selectedShows.map((show, index) => {
          if(!show) {
            return null;
          }
          return (
            <Avatar key={index} name={show.title} src={show.image_url} />
          )
        })
      }
    </AvatarGroup>
  )
}