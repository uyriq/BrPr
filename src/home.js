import { useRef, useState, useEffect, createRef } from 'react'
import {
    ActionIcon,
    Box,
    Group,
    SimpleGrid,
    Grid,
    Container,
    Tabs,
    Text,
    Title,
    UnstyledButton,
    useMantineTheme,
    Center,
} from '@mantine/core'
import { useMediaQuery, useIntersection, useScrollIntoView } from '@mantine/hooks'
import { Plus, Minus } from 'tabler-icons-react'
import { customColors } from 'constants-colors'

export default function Home() {
    const tabLabels = ['matrix', 'sequences']
    const [activeTab, setActiveTab] = useState(tabLabels[0])
    const theme = useMantineTheme()
    const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.xl.toFixed()}px)`)
    const containerRef = useRef(tabLabels.map(() => createRef()))

    const { ref, entry } = useIntersection({
        root: containerRef.current,
        rootMargin: '10px 0px 10px 0px',
        threshold: 1,
    })

    const columnsL = largeScreen ? 4 : 6
    const columnsR = largeScreen ? 8 : 6
    const widthL = largeScreen ? '35vw' : '90vw'
    const widthR = largeScreen ? '55vw' : '90vw'
    const padding = largeScreen ? '80vw' : '10vw'

    // TODO ---- переделать  ----
    // https://stackoverflow.com/questions/54940399/how-target-dom-with-react-useref-in-map
    // https://github.com/mantinedev/mantine/blob/modal-base/docs/src/components/MdxPage/TableOfContents/TableOfContents.tsx

    useEffect(() => {
        containerRef?.current[0]?.current?.focus()
    }, [])

    /*     useEffect(() => {
        //  tabLabels.current = document.getElementById(activeTab)
        tabLabels.forEach((label, index) => {
            containerRef.current[index] = document.getElementById(label)
        })
    }, [tabLabels]) */

    function getActiveElement(rects) {
        if (rects.length === 0) {
            return -1
        }

        const closest = rects.reduce(
            (acc, item, index) => {
                if (Math.abs(acc.position) < Math.abs(item.y)) {
                    return acc
                }
                return {
                    index,
                    position: item.y,
                }
            },
            { index: 0, position: rects[0].y }
        )

        return closest.index
    }

    const handleScroll = () => {
        setActiveTab(getActiveElement(containerRef.current.map((d) => d.getBoundingClientRect())))
    }

    useEffect(() => {
        setActiveTab(getActiveElement(containerRef.current.map((d) => d.getBoundingClientRect())))
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // // TODO ---- переделать ----

    const defaultStyle = {
        main: {
            background: customColors.backgroundMain,
            maxwidth: '100vw',
            justify: 'center',
            padding: '1% 1% 1% 1%',
            border: customColors.stackLineBorder1,
        },
        container: largeScreen
            ? {
                  minWidth: '100vw',
                  minHeight: '50vh',
              }
            : {
                  minWidth: '10vw',
                  minHeight: '10vh',
                  border: 'none',
              },
        matrixwrapp: {
            minHeight: '80vh',
            padding: '2% 2% 0 0',
            margin: '2% 2% 0% 0%',
        },

        sequenceswrapp: {
            minHeight: '80vh',
            padding: '2% 2% 0 0',
            margin: '2% 2% 0% 0%',
        },
    }

    const style = largeScreen
        ? {
              position: 'relative',
              top: '1vh',
          }
        : {
              position: 'unset',
              width: '100%',
          }

    const { scrollIntoView: scrollIntoViewUp, targetRef: matrixRef } = useScrollIntoView({
        offset: 200,
        alignment: 'start',
    })
    const { scrollIntoView: scrollIntoViewDown, targetRef: seqRef } = useScrollIntoView({
        offset: 100,
        alignment: 'start',
    })

    return (
        <>
            <Box style={style}>
                <div
                    flex={1}
                    sx={{
                        minHeight: '10vh',
                        minWidth: '50vw',
                        position: 'fixed',
                        padding: '0 0 0 0',
                        background: customColors.backroundPanelTabs,
                    }}
                >
                    {!largeScreen && (
                        <Tabs
                            defaultValue={entry?.isIntersecting ? 'matrix' : 'sequences'}
                            onTabChange={setActiveTab}
                            sx={{
                                visibility: largeScreen ? 'hidden' : 'visible',
                                position: 'fixed',
                                top: '7vh',
                                background: customColors.backroundPanelTabs,
                                width: '100vw',
                                paddingRight: 0,
                                margin: '0 0 0vh 0vh',
                            }}
                        >
                            <Tabs.List>
                                <Tabs.Tab value="matrix" onClick={() => scrollIntoViewUp({ alignment: 'start' })}>
                                    matrix
                                </Tabs.Tab>
                                <Tabs.Tab value="sequences" onClick={() => scrollIntoViewDown({ alignment: 'start' })}>
                                    sequences
                                </Tabs.Tab>
                            </Tabs.List>
                            <Tabs.Panel value="matrix">Matrix panel</Tabs.Panel>
                            <Tabs.Panel value="sequences">Sequences panel</Tabs.Panel>
                        </Tabs>
                    )}
                </div>
                <Container
                    style={{
                        ...defaultStyle.main,
                        ...defaultStyle.container,
                    }}
                    ref={containerRef}
                >
                    <Text
                        span={true}
                        transform="uppercase"
                        size={56}
                        color={customColors.textColorHead}
                        sx={{
                            letterSpacing: '-4px',
                            fontStretch: 'condensed',
                            fontFamily: 'Roboto Mono, sans-serif, mono',
                        }}
                    >
                        Breach time Remaining {entry?.isIntersecting ? 'matrix' : 'sequences'}
                    </Text>
                    <Grid>
                        <Grid.Col
                            xs={columnsL}
                            ref={matrixRef}
                            style={{ ...defaultStyle.main }}
                            sx={{
                                minHeight: '1vh',

                                maxWidth: widthL,

                                padding: '0% 0% 2% 0%',
                                margin: '10% 0% 0% 0%',
                            }}
                        >
                            <Box style={{ ...defaultStyle.matrixwrapp }} id={tabLabels[0]} ref={containerRef[0]}>
                                1
                                <Plus />
                            </Box>
                        </Grid.Col>
                        <Grid.Col
                            xs={columnsR}
                            ref={seqRef}
                            style={{ ...defaultStyle.main }}
                            sx={{
                                minHeight: '1vh',
                                maxWidth: widthR,
                                padding: '0% 0% 2% 0%',
                                margin: '10% 0% 0% 0%',
                            }}
                        >
                            <Box style={{ ...defaultStyle.sequenceswrapp }} id={tabLabels[1]} ref={containerRef[1]}>
                                2
                                <Minus />
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Container>
                <Text> 1 {entry?.isIntersecting ? 'matrix' : 'sequences'} </Text>
            </Box>
        </>
    )
}
