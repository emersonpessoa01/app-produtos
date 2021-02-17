import { useState } from "react";
import axios from "axios";

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false,
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState();

  const call = () => {
    setRequestInfo({
      ...setRequestInfo,
      loading: true
    });
    axios(config);
  };
  return [call, requestInfo];
}
