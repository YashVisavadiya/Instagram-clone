/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import usePhotos from '../hooks/use-photos';
import Post from './post';
import useUser from '../hooks/use-user';

export default function timeline() {
  const { user } = useUser();
  const { photos } = usePhotos(user);

  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos</p>
      )}
    </div>
  );
}
