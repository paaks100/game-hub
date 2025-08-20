import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const [isExpanded, setExpanded] = useState(false);
    const limit = 300;
    const summary = children.substring(0, limit);

    if (!children) return null;

    if (children.length <= limit) return <Text>{children}</Text>

    return (
        <Text>{isExpanded ? children : summary + '...'}
            <Button
                size='xs'
                marginLeft={2}
                fontWeight='bold'
                colorPalette='yellow'
                onClick={() => setExpanded((prev) => !prev)}
            >
                {isExpanded ? 'Show less' : 'Show more'}
            </Button>
        </Text>
    )
}

export default ExpandableText