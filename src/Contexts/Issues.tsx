// Dependencies
import { FC, useContext } from "react";

// Contexts
import { IssueContext, Issue } from "./Issue";

const Issues: FC = () => {
  // Here you consume your context and you can grab the issues value
  const { issues, url } = useContext(IssueContext);

  return (
    <>
      <h1>ContentPI Issues from Context</h1>

      {issues.map((issue: Issue) => (
        <p key={`issue-${issue.number}`}>
          <strong>#{issue.number}</strong> {' '}
          <a href={`${url}/${issue.number}`}>{issue.title}</a> {' '}
          {issue.state}
        </p>
      ))}
    </>
  );
};

export default Issues;