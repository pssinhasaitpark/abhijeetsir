import React from 'react'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
const About = () => {
  return (
    <>
      <div className="container">
      <Header />
        <div className="row text-white">
          <div className="col-md-12">
            <h1 className="text-center mb-4">About Me</h1>
            <p>
              Hello! I'm <strong>Abhijeet Kalamkar</strong>, an experienced IT administrator currently working with
          <strong> Parkhya Solutions Pvt. Ltd.</strong> With a passion for technology and system optimization, I specialize in
          managing networks, servers, and IT infrastructures. My goal is to ensure seamless and efficient operations for businesses,
          while providing innovative solutions to meet their technology needs.
        </p>

            <h2 className="mt-4">Professional Experience</h2>
            <p>
              Currently, I'm employed at <strong>Parkhya Solutions Pvt. Ltd.</strong>, where I am responsible for overseeing the entire IT
          ecosystem, including network administration, data security, and system troubleshooting. With years of hands-on experience in
          system monitoring, software deployment, and user support, I ensure that our company’s IT resources are well-maintained and fully
          optimized for peak performance.
        </p>


            <h2 className="mt-4">My Approach</h2>
            <p>
              In my role, I believe in proactive problem-solving and continuous improvement. By staying up to date with the latest technologies,
              I ensure that IT systems are not only secure but also scalable and adaptable to future business needs.
        </p>

            <h2 className="mt-4">Contact Me</h2>
            <p>Feel free to get in touch for collaboration, consultations, or any inquiries about IT management services.</p>
          </div>
        </div>
      <Footer />
      </div>
    </>
  )
}

export default About
