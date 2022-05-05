import HomeLayout from "../../components/layouts/HomeLayout";
import Document from "../../components/article/Document";
import SideBar from "../../components/SideBar";
import Meta from "../../components/Meta";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/global context/GlobalState";
import { DashboardContext } from "../../context/dashboard context/DashboardState";

const Index = () => {
  const router = useRouter();
  const { id, type } = router.query;
  const [document, setDocument] = useState({});
  const { documents } = useContext(GlobalContext);
  const { userDocs, user } = useContext(DashboardContext);

  useEffect(() => {
    if (!id) {
      return;
    }

    // load a draft with user docs
    const doc =
      type !== "draft"
        ? documents.filter((document) => document.id === id)
        : userDocs.filter((document) => document.id === id);

    if (doc.length >= 1) {
      // by default, author, hearts, and views are not in meta, so let's redefine it inside
      const refinedDoc = {
        ...doc[0],
        meta: {
          ...doc[0].meta,
          author: type !== "draft" ? doc[0].author : user.user,
          hearts: doc[0].hearts,
          views: doc[0].views,
        },
      };
      removeProps(refinedDoc, "hearts", "views", "author");

      setDocument(refinedDoc);
    }
  }, [id, documents, userDocs, type]);

  const removeProps = (obj, ...propsName) => {
    propsName.forEach((propName) => {
      delete obj[propName];
    });
  };

  return (
    <HomeLayout smallerDiv={true}>
      <Meta
        title={
          document.title
            ? document.title.substr(0, 1).toUpperCase() +
              document.title.substr(1)
            : "loading..."
        }
      />
      <div style={{ backgroundColor: "#fff" }}>
        {!document.title ? (
          <p style={{ marginTop: "20px", color: "#444" }}>Loading...</p>
        ) : (
          <Document document={document} />
        )}

        <SideBar />
      </div>
    </HomeLayout>
  );
};

export default Index;
