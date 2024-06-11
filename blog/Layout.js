import Header from "./Header";
import Meta from './Meta'
import NavBar from "./NavBar";
import TeamDetails from "./Team";
import ContactUs from "./Contact";

export default function Layout(props) {
  return (
    <section
    className={`layout ${
      props.pathname == "info" &&
      "info_page"}`
    }
    style={{
      backgroundColor: `${props.bgColor && props.bgColor}`,
      color: `${props.pathname == "info" && 'white'}`
    }}
  >
    <Meta
      siteTitle={props.siteTitle}
      siteDescription={props.siteDescription}
    />
    <NavBar />
    <div className="content">{props.children}</div>
    <ContactUs />
    <style jsx>
      {`
        .layout {
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .layout .info_page {
          color: #ebebeb;
        }
        .content {
          flex-grow: 1;
        }
        @media (min-width: 768px) {
          .layout {
            display: block;
          }
          .content {
            flex-grow: none;
            width: 100vw;
            margin-left: 0vw;
          }
        }
      `}
    </style>
  </section>
  );
}