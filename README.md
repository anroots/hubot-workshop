# improbot

improbot is a chat bot built on the [Hubot][hubot] framework. It is also a demo bot for a Hubot bot-building workshop.

[hubot]: http://hubot.github.com

### Running improbot Locally

You can test your hubot by running the following, however some plugins will not
behave as expected unless the [environment variables](#configuration) they rely
upon have been set.

You can start improbot locally by running:

```bash
$ export HUBOT_FLEEP_EMAIL=improbot@improvision.eu
$ export HUBOT_FLEEP_PASSWORD=REDACTED_PASSWORD
$ bin/hubot
```

### Scripting

An example script is included at `scripts/improbot.coffee`, so check it out to
get started, along with the [Scripting Guide][scripting-docs].

For many common tasks, there's a good chance someone has already one to do just
the thing.

[scripting-docs]: https://github.com/github/hubot/blob/master/docs/scripting.md
