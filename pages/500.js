import { Result } from "antd";

export default function Custom500() {
  return <Result status="warning" title="500 - Server-side error occurred" />;
}
