const {
  OpenAIInstrumentation,
} = require("@arizeai/openinference-instrumentation-openai");
import { diag, DiagConsoleLogger, DiagLogLevel } from "@opentelemetry/api";
import { registerOTel } from "@vercel/otel";

export function register() {
  // For debugging
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

  // This is required so that Exporter works.
  console.log(process.env.OTEL_EXPORTER_OTLP_ENDPOINT);

  // register otel using vercel's package. we might not want this?
  registerOTel({
    serviceName: "legal-missionbay",
    instrumentations: [new OpenAIInstrumentation()],
  });

  // Logs.
  console.log(process.env.NEXT_RUNTIME);
  console.log("👀 OpenInference initialized");
}
