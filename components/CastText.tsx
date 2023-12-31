import { Text, StyleSheet } from "react-native";
import Hyperlink from "react-native-hyperlink";

export function CastText({ text }: CastTextProps) {
  return (
    <Hyperlink linkDefault={true} linkStyle={styles.links}>
      <Text style={styles.text}>{text}</Text>
    </Hyperlink>
  );
}

const styles = StyleSheet.create({
  links: {
    color: "#8D60FF",
    fontWeight: "500",
  },
  text: {
    marginTop: 8,
    marginBottom: 4,
    color: "#ffffff",
    fontSize: 15,
    lineHeight: 20,
  },
});

export interface CastTextProps {
  text: string;
}
