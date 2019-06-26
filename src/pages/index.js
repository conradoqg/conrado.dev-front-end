import React from 'react';
import { graphql } from 'gatsby';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Img from "gatsby-image"
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import Medium from 'mdi-material-ui/Medium';
import Linkedin from 'mdi-material-ui/Linkedin';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        width: 180,
        height: 180,
        border: "20px solid rgba(0, 0, 0, 0.01)"
    },
    attentionButton: {
        borderTop: '10px',
        animation: 'upAndDownAnimation 2s ease infinite',
        animationName: '$upAndDownAnimation'
    },
    '@keyframes upAndDownAnimation': {
        '0%': {
            transform: 'translateY(-5px)',
        },
        '50%': {
            transform: 'translateY(+5px)',
        },
        '100%': {
            transform: 'translateY(-5px)',
        }
    }
});

const HTMLString = ({ string }) => {
    return (<div
        dangerouslySetInnerHTML={{ __html: string }}
    />);
}

class Index extends React.Component {
    state = {
        openned: false
    }
    handleNext = open => () => {
        this.setState({ openned: open });
    };

    render() {
        const { data, width, classes, intl } = this.props;
        const { avatarImage, intlYaml } = data;
        const dataIntl = intlYaml;

        return (
            <React.Fragment>
                <Container maxWidth="md" style={{ paddingTop: "100px" }}>
                    <Paper>
                        <Grid container className={classes.root}>
                            <Grid item xs={12} sm>
                                <Grid container justify="center">
                                    <Grid item>
                                        <Avatar className={classes.purpleAvatar}>
                                            <Img
                                                fixed={avatarImage.edges.find(edge => edge.node.fixed.originalName === "avatar.jpg").node.fixed} />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm>
                                <Typography variant="h5" component="h5" style={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                }}>
                                    <HTMLString string={dataIntl.introduction} />
                                </Typography>
                            </Grid>
                        </Grid>
                        {this.state.openned ? (
                            <React.Fragment>
                                <Divider />
                                <Grid container className={classes.root}>
                                    <Grid item xs>
                                        <Typography variant="h6" gutterBottom>
                                            {dataIntl.descriptionHeader}
                                        </Typography>
                                        <Typography variant="body1" component="div">
                                            <HTMLString string={dataIntl.description} />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        ) : null}
                        <Divider />
                        <Grid container justify="center">
                            <Grid item style={{ margin: "10px" }}>
                                {this.state.openned ? (
                                    <IconButton aria-label="Collapse" size="small" onClick={this.handleNext(false)}>
                                        <ExpandLess
                                            style={{
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center"
                                            }}
                                        />
                                    </IconButton>
                                ) : (
                                        <IconButton aria-label="Expand" size="small" className={classes.attentionButton} onClick={this.handleNext(true)}>
                                            <ExpandMore
                                                style={{
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center"
                                                }}
                                            />
                                        </IconButton>
                                    )}
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
                <Container id="passions" maxWidth="md" style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Typography variant="h4" align="center" style={{ marginTop: "50px", marginBottom: "50px" }} gutterBottom>
                        <FormattedMessage id="passions" />
                    </Typography>
                    <Grid container spacing={5}>
                        {dataIntl.passions.map((passion, index) => (
                            <Grid item xs={12} sm={6} md={4} lg key={passion.title}>
                                <Paper style={{ height: "100%" }}>
                                    <Grid container justify="center" direction="column">
                                        <Grid item style={{ padding: "10px" }}>
                                            <Typography variant="h5" align="center">
                                                {passion.title}
                                            </Typography>
                                        </Grid>
                                        <Divider />
                                        <Grid item style={{ padding: "10px" }}>
                                            <List dense={true}>
                                                {passion.items.map((item, index) => (
                                                    <ListItem key={item}>
                                                        <ListItemText disableTypography
                                                            primary={<Typography variant="body2" align="center">{item}</Typography>}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container maxWidth="md" style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Grid container alignItems="center" justify="center" spacing={5} >
                        <Grid item>
                            <div className="github-card" data-github="conradoqg" data-width={isWidthUp('sm', width) ? "400" : "280"} data-height="" target="blank" data-theme="default"></div>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="md" style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Typography variant="h4" align="center" style={{ marginTop: "50px", marginBottom: "50px" }} gutterBottom>
                        <FormattedMessage id="experiences" />
                    </Typography>

                    <Paper style={{ padding: "10px" }}>
                        {dataIntl.experiences.map((experience, index) => (
                            <Grid container spacing={0} style={{ margin: "0px" }} key={index}>
                                <Hidden smDown>
                                    <Grid item xs={1} style={{ padding: "10px", textAlign: "center" }}>
                                        <Typography variant="subtitle2">
                                            {experience.finish !== null ? experience.finish : <FormattedMessage id="current" />}
                                            <Divider />
                                            {experience.start}
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <div style={{ height: "14px", width: "10px", marginTop: "45px", marginRight: "-2px", borderBottomLeftRadius: "14px", borderTopLeftRadius: "14px", backgroundColor: "#008cc9", borderColor: "#008cc9" }}></div>
                                    </Grid>
                                </Hidden>
                                <Grid item xs style={{ borderLeft: "10px solid #008cc9", padding: "10px" }} zeroMinWidth={true}>
                                    <Grid container spacing={1} direction="column">
                                        <Hidden mdUp>
                                            <Grid item style={{ padding: "10px", textAlign: "center" }}>
                                                <Typography variant="subtitle2">
                                                    {experience.finish !== null ? experience.finish : null} - {experience.start}
                                                </Typography>
                                            </Grid>
                                        </Hidden>
                                        <Grid item style={{ maxWidth: "320px", width: "100%" }}>
                                            <Img
                                                fluid={experience.image.childImageSharp.fluid} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                {experience.position} <FormattedMessage id="on" /> <a href={experience.link} target="_new" rel="noopener">{experience.company}</a>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="body1" style={{ paddingTop: "10px" }} component="div">
                                                <HTMLString string={experience.description} />
                                            </Typography>
                                            <Divider />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                    </Paper>
                </Container>
                <Container maxWidth={false} style={{ paddingTop: "20px", backgroundColor: "#2a2a30" }}>
                    <Grid container justify="center" alignContent="center" spacing={5}>
                        <Grid item>
                            <IconButton color="inherit" aria-label={intl.githubRepository} href="https://github.com/conradoqg" target="_new" rel="noopener">
                                <GithubCircle fontSize="large" style={{ color: "white" }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" aria-label={intl.mediumPosts} href="https://medium.com/@conradoqg" target="_new" rel="noopener">
                                <Medium fontSize="large" style={{ color: "white" }} />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="inherit" aria-label={intl.linkedinProfile} href="https://br.linkedin.com/in/conradoqg" target="_new" rel="noopener">
                                <Linkedin fontSize="large" style={{ color: "white" }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Container>

            </React.Fragment>
        );
    }
}

export default withWidth()(withStyles(styles)(injectIntl(Index)))

export const pageQuery = graphql`
    query($language: String!) {
        avatarImage: allImageSharp {
            edges {
                node {
                    fixed(width: 140, height: 140, quality: 100) {
                        ...GatsbyImageSharpFixed
                        originalName
                    }              
                }
            }
        }
               
        intlYaml(lang: {eq: $language}) {            
            introduction
            descriptionHeader
            description
            passions {
                title
                items
            }
            experiences {
                start(formatString: "MMMM YYYY", locale: $language)
                finish(formatString: "MMMM YYYY", locale: $language)
                company
                position
                link
                image {
                    childImageSharp  {                        
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }                        
                    }
                }
                description
            }            
        }
    }
    `
