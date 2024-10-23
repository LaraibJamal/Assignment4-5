import Image from "next/image";
import image1 from "../public/bg4.jpg";
import styles from './page.module.css';
import { isAbsolute } from "path";

export default function Blogggg() {
    return (
        <div className="contains">
      {/* Header Section */}
      <div className="upper">
        <h1 className="text">Future of AI</h1>
      </div>

      {/* Content and Image Layout */}
      <div className="content-wrapper">
        {/* Content Section */}
        <div className="content">
          <p>
          The Road to AGI: Current Challenges
Creating AGI is a monumental challenge. While AI has made significant strides in machine learning, natural language processing, and robotics, achieving true general intelligence faces several hurdles:

Data Limitation: Current AI models require enormous amounts of data to learn. For AGI to function like a human, it must be able to learn from fewer examples and generalize this knowledge to unfamiliar tasks.

Reasoning and Adaptability: Human reasoning involves making sense of the unknown, learning from experiences, and adapting to new situations. For AGI to achieve this, it must mimic these cognitive processes, which is still a significant gap in today’s AI systems.

Consciousness and Understanding: While machines can process information, they lack consciousness or the ability to understand the "why" behind the tasks they perform. AGI would need to develop something akin to human awareness, which is currently beyond the reach of modern AI.
Conclusion: Will AGI Become a Reality?
While AGI remains an elusive goal, the advancements in AI technologies suggest that the possibility is not entirely out of reach. The road ahead is filled with technical, ethical, and philosophical challenges. Whether AGI becomes a reality in the next few decades or remains a theoretical concept, one thing is certain: the future of AI will continue to shape our world in profound ways.

          </p>
        </div>

        {/* Image Section */}
        <div className="image-wrapper">
          <Image src={image1} alt="Blog Image" width={400} height={300} />
        </div>
      </div>
    </div>
    )
}