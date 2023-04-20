/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';

import Main from './src/Components/Main/Main';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/Graphql/client.config';


function App(): JSX.Element {

	return (
		<ApolloProvider client={client}>
			<Main />
		</ApolloProvider>
	);
}

export default App;
