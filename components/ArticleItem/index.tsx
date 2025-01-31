import React from 'react';
import { Text, Image, Linking, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ArticleProps } from './types';

const ArticleItem = ({ article }: ArticleProps) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(article.url)}
      style={styles.container}
    >
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.source}>{article.source.name}</Text>
    </TouchableOpacity>
  );
};

export default ArticleItem;
