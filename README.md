# Echowings

Echowings uses basic Machine Learning to interpret the sentiment of hundreds of thousands tweets (and counting) published directly following the 2016 US Presidential Election. Sign up to receive monthly suggestions for accounts with an opposing political leaning to your own.

#### Getting Running
```
# You'll need these ENV Vars

export ECHOWINGS_TWITTER_CONSUMER_KEY=foobar
export ECHOWINGS_TWITTER_CONSUMER_SECRET=foobar
export ECHOWINGS_TWITTER_ACCESS_TOKEN=foobar
export ECHOWINGS_TWITTER_ACCESS_TOKEN_SECRET=foobar
export ECHOWINGS_SENDGRID_USERNAME=foobar
export ECHOWINGS_SENDGRID_PASSWORD=foobar
export ECHOWINGS_LETSENCRYPT_CHALLENGE=foobar
```

##### Then run these commands:
```
git clone https://github.com/sanctuarycomputer/echowings
cd echowings
rake db:create
rake db:migrate
npm install
npm run rails-server
```

Echowings is released under the MIT License.
