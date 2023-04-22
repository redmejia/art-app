import {
    ActivityIndicator,
} from "react-native";



export type SpinerProps = {
    Size?: "small" | "large";
    Color? :string;
}


export const Spiner = ({Size, Color}:SpinerProps) => {
    return (
            <ActivityIndicator size={Size} color={Color} />
    )
}