import { HTML as HTMLLive } from "$live/std/ui/types/HTML.ts";
import Markdown from "$live/std/ui/components/Markdown.tsx";

export interface Test {
  question: string;
  type: "checkbox" | "radio";
  alternatives: Array<string>;
  comments?: Array<string>;
  correctAnswers: Array<number>;
}

export interface UnitProps {
  title?: string;
  description?: string;
  videoEmbeddedUrl?: string;
  /**
   * @default Y2DcMhCJSDI
   */
  youtubeVideo?: string;
  body?: HTMLLive;
  tests?: Array<Test>;
}

export default function UnitComponent(props: UnitProps) {
  return (
    <>
      <h1>{props.title}</h1>
      <div>{props.description}</div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + props.youtubeVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
      <div>{props.description}</div>
      {props.body ? <Markdown text={props.body} /> : <></>}
      <fieldset>
        {props.tests?.map(
          (test, indexTest) => (
            <div>
              <h2>{test.question}</h2>
              {test.alternatives.length}
              <ul>
                {test.alternatives.map((alternative, index) => (
                  <li>
                    <input
                      id={"" + index}
                      name={"test" + indexTest}
                      value={"" + index}
                      type={test.type}
                    >
                      {alternative}
                    </input>
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </fieldset>
    </>
  );
}
