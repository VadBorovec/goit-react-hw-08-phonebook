// import PropTypes from 'prop-types';
import { Card, CardHeader, CardTitle, CardContent } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

// Title.propTypes = {
//   title: PropTypes.string,
// };
