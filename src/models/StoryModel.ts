import StoryContentModel from "./StoryContentModel";

export default interface StoryModel {
  storyId: string;
  name: string;
  content: StoryContentModel[];
}