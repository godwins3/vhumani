import { ErrorResponse } from "@/types/errors";
import { UniversalErrorDisplay } from "./universal-error-display";

interface ErrorDisplayWrapperProps {
  error: ErrorResponse;
}

export function ErrorDisplayWrapper({ error }: ErrorDisplayWrapperProps) {
  return <UniversalErrorDisplay error={error} hasRetry={true} />;
}
