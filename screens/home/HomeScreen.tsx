import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import ArticleItem from '../../components/ArticleItem';
import { useNewsViewModel } from '@/viewModels/useNewsViewModel';
import { styles } from './styles';

export const HomeScreen = () => {
  const { query, setQuery, articles, loading, error, handleSearch } =
    useNewsViewModel();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for news..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <ArticleItem article={item} />}
      />
    </View>
  );
};
