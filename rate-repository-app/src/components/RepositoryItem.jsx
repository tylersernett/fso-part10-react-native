import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 20,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 12,
  },
  childMargin: {
    marginBottom: 8, // Add a margin of 5 units to the children
  },
  textRow: {
    marginRight: 8,
    flexGrow: 1,
    alignItems: 'center',
  },
  statsChild: {
    marginBottom: 4,
  },
  languageContainer: {
    flexDirection: 'row', // Ensures that the language container doesn't wrap the text
  },
  languageName: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  horizontalLine: {
    borderBottomColor: theme.colors.textSecondary, // Color of the line
    borderBottomWidth: 4,       // Width of the line
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{
              uri: item.ownerAvatarUrl,
            }} />
          <View style={styles.flexCol}>
            <Text style={styles.childMargin} fontWeight='bold'>{item.fullName}</Text>
            <Text style={styles.childMargin} color='textSecondary'>{item.description}</Text>
            <View style={styles.languageContainer}>
              <View style={[styles.languageName, styles.childMargin]}>
                <Text color='textLight'>{item.language}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.flexRow}>
          {[
            { label: 'stars', value: item.stargazersCount },
            { label: 'forks', value: item.forksCount },
            { label: 'reviews', value: item.reviewCount },
            { label: 'rating', value: item.ratingAverage },
          ].map((itemData, index) => {
            const formattedValue =
              itemData.value > 1000
                ? `${(itemData.value / 1000).toFixed(1)}k`
                : itemData.value;

            return (
              <View key={index} style={styles.textRow}>
                <Text fontWeight='bold'>  {formattedValue}</Text>
                <Text color='textSecondary'>{itemData.label}</Text>
              </View>
            );
          })}
        </View>

      </View>
      <View style={styles.horizontalLine} />
    </>
  );
}

export default RepositoryItem;
