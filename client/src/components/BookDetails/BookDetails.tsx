import React from "react";
import { useQuery } from "@apollo/client";
import { Typography } from "@material-ui/core";
import { GET_BOOK_DETAILS } from "../../graphql/queries";
import { BookType } from "../../types/types";
import useBookDetails from "../../hooks/useBookDetails/useBookDetails";
import FavButton from "./components/FavButton";

type Props = {
  strBookId: string;
};

/**
 * @description selected book details
 * @param {String} {strBookId book ID}
 * @returns {JSX} component markup
 */
const BookDetails: React.FC<Props> = ({ strBookId }) => {
  const { data, loading, error, funcIsBookFavorite, funcToggleAsFavorite } =
    useBookDetails({ strBookId });

  if (loading) return <Typography>Loading book details...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;
  if (!data?.book) return <Typography>No book selected.</Typography>;

  /**
   * @param {Object} objBook fetched book object
   * @returns {JSX} book details conditional render
   */
  const renderBook = (objBook?: BookType) => {
    if (objBook) {
      const { id, name, genre, author } = objBook;
      return (
        <div>
          <Typography variant="h4" component="h2">
            {name}{" "}
            <FavButton
              bFavorite={funcIsBookFavorite(id)}
              handleClick={funcToggleAsFavorite(id)}
            />
          </Typography>
          <Typography>{genre}</Typography>
          <Typography>{author!.name}</Typography>
          <Typography>All books by this author:</Typography>
          <ul>
            {author!.books!.map((objBook: Record<string, any>) => (
              <li key={objBook!.id}>{objBook!.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <Typography>No book selected.</Typography>;
    }
  };

  return <div>{renderBook(data.book)}</div>;
};

export default BookDetails;
