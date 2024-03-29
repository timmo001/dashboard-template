# Troubleshooting

## Check the docs

Make sure you review the setup docs. These will always be the most up to date
 source of how to setup the app. It is always worth checking your config
 against the [setup] docs.

For login and account issues, check against the [login] docs.

## Use the latest version

If your are facing any issues logging in, connecting etc. you should first
 make sure you are running the latest version.

If you are running Docker, run:

```bash
docker pull timmo001/dashboard
docker pull timmo001/dashboard-api
```

and run the containers again. You may have to clear the cache/cookies in your
 browser.

If running natively, checkout the latest version from the release page for
 the [app] and the [api] and rerun the app.

## I'm still having issues

If you are still stuck, post any logs you can gather from the steps above
 to the [forum thread] where the community will be able to help you.
 Make sure to remove any personal data such as a public address or password.

You can also post an issue on the GitHub repositories if you have uncovered a
 bug.

[app]: https://github.com/timmo001/dashboard/releases
[api]: https://github.com/timmo001/dashboard-api/releases
[forum thread]: https://community.home-assistant.io/t/dashboard-a-touch-compatible-webapp-for-controlling-the-home/62597
[setup]: https://timmo.dev/dashboard/setup/
[login]: https://timmo.dev/dashboard/login/
[GitHub repository]: https://github.com/timmo001/dashboard/issues
[here]: https://github.com/timmo001/addon-dashboard/issues
