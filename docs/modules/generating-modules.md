# Generating modules

Motor-Core comes with a full suite of generators to generate complete modules or just parts of modules.
It leverages the Laravel generators and adds functionality for more complexity.

## Generating a module in the default namespace (\App)

```zsh
php artisan motor:make:module Desk
```

## Module in a custom namespace

Double backslashes are important!

```zsh
php artisan motor:make:module Desk --namespace=Company\\Module\\Desk
```

## Module in a separate path (e.g. a laravel package)

```zsh
php artisan motor:make:module Desk --namespace=Company\\Module\\Deskt --path=packages/companymodule/src
```

More detailed information to be added soon&trade;