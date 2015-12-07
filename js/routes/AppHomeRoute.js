import Relay from 'react-relay';

export default class extends Relay.Route {
  static path = '/';
  static queries = {
    game: () => Relay.QL`
      query {
        game
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
