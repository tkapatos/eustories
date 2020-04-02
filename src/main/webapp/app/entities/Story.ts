import Initiative from './Initiative';
export class Story {
  public explanations: string;
  public toBeDiscussed: string;
  public status: string;
  public jiraId: string;
  public summary: string;
  public points: number;
  public criteria: [];
  public initiative: Initiative;
}
export default Story;
