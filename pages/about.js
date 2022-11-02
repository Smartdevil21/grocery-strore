import React from "react";
import Styles from "../styles/about.module.scss";
import Wrapper from "../components/wrapper/Wrapper";
import Image from "next/image";

const About = () => {
  return (
    <Wrapper>
      <section className={Styles.about}>
        <h1>Who are We?</h1>
        <div className={Styles.img}>
          <Image src={"/about.png"} fill />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          placeat laborum sapiente repellendus dolor quis eos. Laudantium ea
          omnis officia blanditiis dolorum consequatur error cumque, cum minus
          ipsum quae dolor vero laboriosam! Maiores itaque qui iusto id
          consequatur fugiat nostrum nihil incidunt. Quo veritatis earum
          repudiandae minus velit pariatur perferendis sint eos reprehenderit
          libero animi, sequi soluta sit cupiditate ab voluptas! Adipisci
          asperiores nisi atque rerum odio consequatur ullam, esse modi
          architecto hic nesciunt aspernatur dolores corporis dicta? Dolore
          perferendis harum, deleniti dolorum corporis cupiditate velit
          aspernatur numquam magnam placeat minus esse nesciunt sed quia error,
          laudantium vitae eum qui.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          blanditiis, vero voluptatem adipisci quas sint veritatis ipsa ullam
          tempore corrupti id maiores in officiis iusto!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magnam
          aperiam deserunt? Corrupti quas debitis perferendis perspiciatis
          optio? Fugit quaerat eveniet rem non possimus dolorum in error ea
          nesciunt fuga libero, distinctio, velit impedit repellat suscipit.
          Neque ipsum esse dolorem.
        </p>
      </section>
    </Wrapper>
  );
};

export default About;
