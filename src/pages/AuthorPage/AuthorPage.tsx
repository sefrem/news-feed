import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Author } from "../../types/types";
import { authorsApi } from "../../api/api";

import styles from "./AuthorPage.module.css";

const AuthorPage = () => {
  const [author, setAuthor] = useState<Author | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAuthor = async () => {
      const author = await authorsApi({ addUrl: `/${id}` });
      setAuthor(author);
    };
    fetchAuthor().catch(console.error);
  }, [id]);

  return (
    <div className={styles.author}>
      <h4>{author?.name}</h4>
      <div className={styles.about}>{author?.about}</div>
    </div>
  );
};

export default AuthorPage;
