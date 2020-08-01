import Head from "next/head";
import Link from "next/link";
import Particles from "react-particles-js";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import AV from "leancloud-storage";
import { Spin, Alert, notification } from "antd";

import styles from "./index.module.scss";
import leanerrors from "src/lib/leancloud_error_code.json";
import Sidebar from "../Sidebar";

function Components(props) {
  const [isFlipped, setisFlipped] = useState(false);
  return (
    <div className={styles.container}>
      <Sidebar></Sidebar>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default Components;
