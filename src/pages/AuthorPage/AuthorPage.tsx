import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import Card from "../../components/UI/Card";
import Spinner from "../../components/UI/Spinner";

import { Author } from "../../types/types";
import { authorsApi } from "../../api/api";
import { generateOccupation } from "../../utils/occupationGenerator";

import styles from "./AuthorPage.module.css";

const AuthorPage = () => {
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAuthor = async () => {
      const author = await authorsApi({ addUrl: `/${id}` });
      setAuthor(author);
    };
    setLoading(true);
    fetchAuthor().finally(() => {
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !author) {
    return (
      <div className={styles.noAuthor}>Sorry, there is no such author.</div>
    );
  }

  return (
    <div className={styles.author}>
      <h4 className={styles.title}>{author?.name}</h4>
      <div className={styles.occupation}>{generateOccupation()}</div>
      <p className={styles.heading}>About</p>
      {author?.about && (
        <div
          className={styles.about}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(author.about) }}
        />
      )}
      <div>
        <p className={styles.heading}>{`${author?.name}'s messages`}</p>
        <ul className={styles.messages}>
          {author?.messages.map((message) => (
            <Card key={message.id} message={message} showAuthor={false} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorPage;
