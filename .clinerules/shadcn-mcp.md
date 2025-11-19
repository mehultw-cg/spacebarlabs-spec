# Building with ShadCN and MCPs

## Usage Rule
When asked to use shadcn components, use the MCP server.

## Planning Rule
When asked to plan using anything related to shadcn:
Use the MCP server during planning
Use different shadcn repositories to get/pull components as requested by user, can suggest user more suitable components from other registries available to shadcn tool, can use tool call to check available registries
Apply components wherever components are applicable
Use whole blocks where possible (e.g. login page, calendar)

## Implementation Rule
When implementing:
First call the fetch, shadcn mcp tool or context7 mcp tool to see how the component is used,
Then implement it so it is implemented correctly using the patterns gathered from tool calls. 