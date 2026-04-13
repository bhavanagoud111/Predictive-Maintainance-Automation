// Author: Bhavana Goud | github.com/bhavanagoud111
import { Annotation, messagesStateReducer } from "@langchain/langgraph";

export const StateAnnotation = Annotation.Root({
  messages: Annotation({
    reducer: messagesStateReducer,
    default: () => [],
  }),
  lastAgent: Annotation({
    default: () => null,
  }),
  next: Annotation({
    default: () => null,
  }),
});
