import ShowListSection from "../../../components/features/shows/ShowListSection/ShowListSection";
import { shows } from "@/components/shared/Data/Data";
import { IShowCard } from "@/typings/show";

export default function ShowsList() {
  return <ShowListSection shows={shows as IShowCard[]} />;
}
